document.addEventListener("DOMContentLoaded", function(){

    const Human = document.getElementById("human");
    const Level = document.getElementsByClassName("level");
    const Lang = document.getElementsByClassName("lang");
    const Coder = document.getElementById("coder");
    const Easy = document.getElementById("easy");
    const Medium = document.getElementById("medium");
    const Hard = document.getElementById("hard");
    const Cpp = document.getElementById("cpp");
    const Java = document.getElementById("java");
    const All = document.getElementById("all");
    const Start = document.getElementById("start_button");
    const Para = document.getElementById("para");
    const Input = document.getElementById("input");
    const Tmp = document.getElementById("tmp");
    const Time = document.getElementById("time");
    const TimeButton = document.getElementsByClassName("time_button");
    const S20 = document.getElementById("s20");
    const S60 = document.getElementById("s60");
    const S100 = document.getElementById("s100");
    const Clock = document.getElementById("clock");
    const Disp_time = document.getElementsByClassName("disp_time");
    const Img = document.getElementById("img")
    const Res = document.getElementById("res");
    
    var typed=0;
    var time_choice=60;
    var error_cnt=0;
    var st = new Set();
    var data_choice=0;

    const words = [
        ["Easy", "hello", "my", "great", "leetcode", "happy", "load", "dominos", "kite", "doraemon", "lime", "banana", "mouse", "code", "roman", "reigns", "triple", "cat", "dog", "sun", "moon", "star", "book", "pen", "fish", "bird", "tree", "home", "cake", "ball", "ship", "plane", "train", "fruit", "sky", "water", "cloud", "ant", "fox", "king", "queen", "river", "stone", "apple", "grape", "peach", "orange", "desk", "chair", "glass", "cup", "plate", "fork", "spoon", "bowl", "rice", "corn", "milk", "sugar", "flame", "magic", "power", "light", "dark", "green", "blue", "red", "pink", "happy", "smile", "angel", "dream"],
        ["Medium", "cryptography", "synchronized", "transformation", "microbiology", "biotechnology", "mathematical", "extraordinary", "communication", "identification", "understanding", "unpredictable", "representative", "classification", "investigation", "misunderstanding", "environmental", "infrastructure", "multiplication", "organization", "acknowledgment", "entrepreneurship", "transportation", "circumference", "miscommunication", "implementation", "appreciation", "interpretation", "responsibility", "philosophical", "hypothetical", "categorization", "imagination", "documentation", "standardization", "electromagnetic", "internationalization", "characteristic", "comprehensive", "psychological", "transcription", "constitutionality", "overestimation", "interdisciplinary", "counterproductive", "revolutionary", "intellectual", "philanthropic", "contradiction"],
        ["Hard", "alpha#123", "code@007", "x9y8z7&", "secure#2023", "pass@w0rd", "lev3l&42", "mat#rix101", "qwerty@99", "h3llo2u!", "zeta&2022", "byte@64", "data#4ever", "game@Over9", "win@1234", "lock#Xyz", "clo&ud9", "ad#min007", "test@123", "java8&rocks", "sp#eed2021", "ha$hCode77", "us&er001", "alpha&Beta12", "endGame#404", "fixMe@911", "node2020!", "run@2win", "tech#no99", "scr&ipt42", "bug@Hunter22", "dec#ode123", "cyb&er007", "xtra#4u", "find@Me202", "pro&Hack88", "boot#123", "n3xtGen@", "fun2pl@y", "zeroDay#77", "alpha@X42", "top$Secret12", "log&ic99", "k3y@F0rC3", "new#Era01", "cool&D3v", "roc@kStar007", "nightWolf#", "mag@icKey42", "b0t&Hunter", "testify#404", "enc@rypt123", "un@Lock77", "quantum&X", "g4m#3Rz", "m3gA#byte", "sup3rNova@", "neo#4ever", "fireX@9", "go#2Sleep", "sp@eedX101"],
        ["C++", "if", "else", "enum", "switch", "case", "for", "while", "do", "break", "return", "true", "false", "bool", "int", "string", "long", "max", "min", "vector", "stack", "queue", "priority", "swap", "bound", "lower", "upper", "__builtin", "_popcount", "{", "(", "1e9", "%", "+", "-", "==", "!", "^", "&", "|", ";", ",", "map", "unordered_", "set", "[", "pow", "<", "main", "setprecision", "unsigned", "#", "define", "accumulate", "multiset", "dequeue", "stack", "char", "log", "pop_back", "push", "erase", "front", "pop", "top", "push_back", "insert", "find", "count", "substr", "pos", "define", "pair", "sort", "begin", "rend", "::", "+=", "%=", "?", ">", ".", ":", "empty", "continue"],
        ["C++", "if", "else", "enum", "switch", "case", "for", "while", "do", "break", "return", "true", "false", "bool", "int", "string", "long", "max", "min", "vector", "stack", "queue", "priority", "swap", "bound", "lower", "upper", "__builtin", "_popcount", "{", "(", "1e9", "%", "+", "-", "==", "!", "^", "&", "|", ";", ",", "map", "unordered_", "set", "[", "pow", "<", "main", "setprecision", "unsigned", "#", "define", "accumulate", "multiset", "dequeue", "stack", "char", "log", "pop_back", "push", "erase", "front", "pop", "top", "push_back", "insert", "find", "count", "substr", "pos", "define", "pair", "sort", "begin", "rend", "::", "+=", "%=", "?", ">", ".", ":", "empty", "continue"],
        ["C++", "if", "else", "enum", "switch", "case", "for", "while", "do", "break", "return", "true", "false", "bool", "int", "string", "long", "max", "min", "vector", "stack", "queue", "priority", "swap", "bound", "lower", "upper", "__builtin", "_popcount", "{", "(", "1e9", "%", "+", "-", "==", "!", "^", "&", "|", ";", ",", "map", "unordered_", "set", "[", "pow", "<", "main", "setprecision", "unsigned", "#", "define", "accumulate", "multiset", "dequeue", "stack", "char", "log", "pop_back", "push", "erase", "front", "pop", "top", "push_back", "insert", "find", "count", "substr", "pos", "define", "pair", "sort", "begin", "rend", "::", "+=", "%=", "?", ">", ".", ":", "empty", "continue"]
    ];
    function generate(){
        let str2="";
        let bound = 9;
        if(data_choice === 1) bound = 4;
        for(let i=0; i<bound; i++){
            let id = (Math.floor(Math.random()*100))%words[data_choice].length;
            str2 += words[data_choice][id];
            str2 += ' ';
        }
        str2.trim()
        return str2;
    }

    function calc(){
        if (typed > 0) {
            let accuracy = Math.floor(((typed - error_cnt - 1) / (typed + error_cnt)) * 100);
            let speed = Math.floor((typed)/((5*(time_choice/60))));
            acc.textContent = `${accuracy}%`;
            sp.textContent = `${speed} wpm`;
            config.textContent = `${words[data_choice][0]}`;
            console.log(typed, error_cnt);
        } else {
            acc.textContent = "0%";
            sp.textContent = "0 wpm"; 
        }
        
    }
    
    Human.addEventListener('click', function () {
        Human.classList.add('active');
        Coder.classList.remove('active');
        Easy.classList.remove('aeasy');
        Medium.classList.remove('amed');
        Hard.classList.remove('ahard');
    
        for (let i = 0; i < Lang.length; i++) {
            Lang[i].style.display = "none";
        }
        for (let i = 0; i < Level.length; i++) {
            Level[i].style.display = "flex";
        }
    });
    Human.click();
    
    
    Easy.addEventListener('click', function(){
        Easy.classList.add('aeasy');
        Medium.classList.remove('amed');
        Hard.classList.remove('ahard');
        data_choice=0;
    });
    Easy.click();
    
    S60.addEventListener('click', function(){
        Clock.textContent=time_choice;
        time_choice = 60;
        S60.classList.add('pick');
        S20.classList.remove('pick');
        S100.classList.remove('pick');
    });
    S60.click();

    Coder.addEventListener('click', function() {
        Human.classList.remove('active');
        Coder.classList.add('active');
        Cpp.classList.remove('ahard');
        Java.classList.remove('ahard');
        All.classList.remove('ahard');

        for (let i = 0; i < Level.length; i++) {
            Level[i].style.display = "none";
        }
        for (let i = 0; i < Lang.length; i++) {
            Lang[i].style.display = "flex";
        }
    });
    
    Medium.addEventListener('click', function(){
        Easy.classList.remove('aeasy');
        Medium.classList.add('amed');
        Hard.classList.remove('ahard');
        data_choice=1;
    });
    Hard.addEventListener('click', function(){
        Easy.classList.remove('aeasy');
        Medium.classList.remove('amed');
        Hard.classList.add('ahard');
        data_choice=2;
    });
    Cpp.addEventListener('click', function(){
        Cpp.classList.add('ahard');
        Java.classList.remove('ahard');
        All.classList.remove('ahard');
        data_choice=3;
    });
    Java.addEventListener('click', function(){
        Cpp.classList.remove('ahard');
        Java.classList.add('ahard');
        All.classList.remove('ahard');
        data_choice=4;
    });
    All.addEventListener('click', function(){
        Cpp.classList.remove('ahard');
        Java.classList.remove('ahard');
        All.classList.add('ahard');
        data_choice=5;
    });
        
    S20.addEventListener('click', function(){
        time_choice = 20;
        S60.classList.remove('pick');
        S20.classList.add('pick');
        S100.classList.remove('pick');;
    });
    S100.addEventListener('click', function(){
        Clock.textContent=time_choice;
        time_choice = 100;
        S60.classList.remove('pick');
        S20.classList.remove('pick');
        S100.classList.add('pick');
    });

    function Result(){
        Para.style.display = "none";
        Img.style.display = "none";
        Clock.style.display = "none";
        Input.style.display = "none";
        calc();
        acc_str.style.display = "inline";
        acc.style.display = "inline";
        sp_str.style.display = "inline";
        sp.style.display = "inline";
        config.style.display = "block";
    }

    let interval;
    async function ReduceTime() {
        let x = Clock.textContent;
        interval = setInterval(() => {
            if (x <= 0) {
                clearInterval(interval); 
                return;
            }
            x--; 
            Input.focus();
            Clock.textContent = `${x}`; 
            if(x == 0){
                Input.disabled = true;
                Result();
            }
        }, 1000); 
    }
    
    Start.addEventListener('click', function () {
        clearInterval(interval);
        Clock.textContent = time_choice;
        
        Input.style.display = "inline-block";
        Input.disabled = false;
        Input.value = '';
        Input.focus();
        
        acc_str.style.display = "none";
        acc.style.display = "none";
        sp_str.style.display = "none";
        sp.style.display = "none";
        config.style.display = "none";
        
        Img.style.display = "flex";
        Clock.style.display = "flex";
        Para.style.display = "block";
        
        error_cnt = 0;
        typed = 0;
        st.clear();
    
        ReduceTime();
        
        let i = 0;
        let str = generate();
        Para.textContent = str;
    
        const newInputHandler = function (event) {
            const cur = event.target.value;
            const ch = cur.slice(cur.length - 1);
    
            if (ch === str[i]) {
                let new_str =`<span style="color: lime; font-family: 'Courier New', Courier, monospace;">${str.slice(0, i)}</span>`;
                new_str += `<span style="color: lime; font-family: 'Courier New', Courier, monospace;">${ch}</span>`;
                new_str += str.slice(i + 1);
                Para.innerHTML = new_str;
                i++;
                typed++;
                if (i === str.length - 1) {
                    error_cnt += st.size; 
                    st.clear(); 
                    str = generate(); 
                    i = 0;
                    Para.textContent = str; 
                }
            } else if (ch !== str[i]) {
                let new_str = `<span style="color: lime; font-family: 'Courier New', Courier, monospace;">${str.slice(0, i)}</span>`;
                new_str += `<span style="color: red; font-family: 'Courier New', Courier, monospace;">${str[i]}</span>`;
                new_str += str.slice(i + 1);
                Para.innerHTML = new_str;
                st.add(i);
            }
        };
    
        Input.removeEventListener("input", Input._handler || (() => {}));
        Input.addEventListener("input", newInputHandler);
        Input._handler = newInputHandler; 
    });
});
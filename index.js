let dependences = [];

function CheckSrc(src) {
    for (let dependenceCheck of dependences) {
        if (dependenceCheck == src) {
            return false;
        }
    }
    dependences.push(src);
    return true;
}

function loadScript(src, callback) {
    // недоработанная функция
    /* const script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.head.insertAdjacentElement('beforeend', script); */
    // доработанная функция

    if (typeof src === "string" && CheckSrc(src) === true) {
        const script = document.createElement("script");
        script.src = src;
        script.onload = callback;
        document.head.insertAdjacentElement('beforeend', script);
    }

    else if (Array.isArray(src)) {
        for (let i = 0; i < src.length; i++) {
            if (CheckSrc(src[i]) === true) {
                const script = document.createElement("script");
                script.src = src[i];
                script.onload = callback;
                document.head.insertAdjacentElement('beforeend', script);
            }
        }
    }

    else {
        src();
    }
}

loadScript("./common.js", () => {
    log();
});

loadScript(["./common.js", "./check.js"], () => {
    check();
});
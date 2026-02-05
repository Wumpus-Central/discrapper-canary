function s(e) {
    let i = 0,
        t = [];
    return async function () {
        if (2 !== i) {
            if (1 === i)
                return new Promise((e) => {
                    t.push(e);
                });
            for (i = 1, await e(), i = 2; t.length > 0; ) t.shift()?.();
        }
    };
}
t.d(i, { u: () => s }), t(321073);

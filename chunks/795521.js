function n(e) {
    let r = 0,
        t = [];
    return async function () {
        if (2 !== r) {
            if (1 === r)
                return new Promise((e) => {
                    t.push(e);
                });
            for (r = 1, await e(), r = 2; t.length > 0; ) {
                var n;
                null == (n = t.shift()) || n();
            }
        }
    };
}
t.d(r, {
    u: () => n,
}),
    t(321073);

let i;
n.d(t, { Z: () => s }), n(653041), (i = n(538036).Z);
let r = [],
    a = !1,
    s = {
        ...i,
        awaitOnline: () =>
            new Promise((e) => {
                if (i.isOnline()) return e();
                {
                    if ((r.push(e), a)) return;
                    a = !0;
                    let t = () => {
                        r.forEach((e) => e()), (r.length = 0), (a = !1), i.removeOnlineCallback(t);
                    };
                    i.addOnlineCallback(t);
                }
            })
    };

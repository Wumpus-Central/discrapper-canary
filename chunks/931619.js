let i;
var a = r(653041);
i = r(538036).Z;
let o = [],
    s = !1;
n.Z = {
    ...i,
    awaitOnline: () =>
        new Promise((e) => {
            if (i.isOnline()) return e();
            {
                if ((o.push(e), s)) return;
                s = !0;
                let n = () => {
                    o.forEach((e) => e()), (o.length = 0), (s = !1), i.removeOnlineCallback(n);
                };
                i.addOnlineCallback(n);
            }
        })
};

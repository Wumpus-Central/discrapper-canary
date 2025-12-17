n.d(t, { Z: () => f }), n(388685);
var a = n(54381);
n(473749);
var r = n(913527),
    l = n.n(r),
    i = n(442837),
    s = n(704215),
    o = n(713284),
    c = n(211644),
    d = n(681619),
    u = n(135970);
let m = (e) => {
        switch (e) {
            case o.D.DC_DISMISSED:
                return "DISMISS:";
            case o.D.DC_SHOWN:
                return "SHOW:";
            case o.D.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    p = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: n } = e;
                return "".concat(t, " ").concat(s.z[n]);
            },
        },
    ],
    h = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return "".concat(s.z[t]);
            },
        },
    ];
function f() {
    let e = (0, i.e7)([o.Z], () => o.Z.getDCFEvents()),
        t = (0, c.ZP)((e) => e.candidates),
        n = (0, c.ZP)((e) => e.lastWinnerTime),
        r = 0 !== n ? l()(n).fromNow() : "n/a",
        f = (0, c.ZP)((e) => e.recentlyShown[0]),
        x = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: m(t) + n.toString(),
                event: m(t),
                dismissibleContent: n,
            };
        }),
        b = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e,
        }));
    return (0, a.jsxs)("div", {
        className: u.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: u.info,
                children: ["Last winner time: ", r],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", {
                className: u.info,
                children: ["Last winner: ", null != f ? s.z[f] : "None"],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("div", {
                className: u.candidatesTableContainer,
                children: (0, a.jsx)(d.Z, {
                    className: u.candidatesTable,
                    columns: h,
                    data: b,
                }),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)(d.Z, {
                columns: p,
                data: x,
            }),
        ],
    });
}

n.d(t, { Z: () => x }), n(388685);
var a = n(951288);
n(647438);
var i = n(913527),
    l = n.n(i),
    r = n(442837),
    s = n(704215),
    o = n(713284),
    c = n(211644),
    d = n(681619),
    u = n(607669);
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
function x() {
    let e = (0, r.e7)([o.Z], () => o.Z.getDCFEvents()),
        t = (0, c.ZP)((e) => e.candidates),
        n = (0, c.ZP)((e) => e.lastWinnerTime),
        i = 0 !== n ? l()(n).fromNow() : "n/a",
        x = (0, c.ZP)((e) => e.recentlyShown[0]),
        g = e.map((e) => {
            let { eventType: t, dismissibleContent: n } = e;
            return {
                key: m(t) + n.toString(),
                event: m(t),
                dismissibleContent: n,
            };
        }),
        f = Array.from(t.keys()).map((e) => ({
            key: e.toString(),
            dismissibleContent: e,
        }));
    return (0, a.jsxs)("div", {
        className: u.panelContainer,
        children: [
            (0, a.jsxs)("div", {
                className: u.info,
                children: ["Last winner time: ", i],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsxs)("div", {
                className: u.info,
                children: ["Last winner: ", null != x ? s.z[x] : "None"],
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("div", {
                className: u.candidatesTableContainer,
                children: (0, a.jsx)(d.Z, {
                    className: u.candidatesTable,
                    columns: h,
                    data: f,
                }),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)(d.Z, {
                columns: p,
                data: g,
            }),
        ],
    });
}

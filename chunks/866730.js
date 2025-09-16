n.d(t, { Z: () => x }), n(388685);
var a = n(951288);
n(647438);
var r = n(913527),
    l = n.n(r),
    i = n(442837),
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
    h = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: n } = e;
                return "".concat(t, " ").concat(s.z[n]);
            },
        },
    ],
    p = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return "".concat(s.z[t]);
            },
        },
    ];
function x() {
    let e = (0, i.e7)([o.Z], () => o.Z.getDCFEvents()),
        t = (0, c.ZP)((e) => e.candidates),
        n = (0, c.ZP)((e) => e.lastWinnerTime),
        r = 0 !== n ? l()(n).fromNow() : "n/a",
        x = (0, c.ZP)((e) => e.recentlyShown[0]),
        b = e.map((e) => {
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
                children: ["Last winner time: ", r],
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
                    columns: p,
                    data: f,
                }),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)(d.Z, {
                columns: h,
                data: b,
            }),
        ],
    });
}

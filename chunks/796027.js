n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(28664),
    o = n(755721),
    s = n(481060),
    l = n(585483),
    c = n(981631),
    u = n(388032),
    d = n(951697);
let f = function (e) {
    var t;
    let {
            message: n,
            errorMessage: f,
            submitting: p,
            onReset: _,
            onSave: m,
            onSaveText: h,
            onResetText: g,
            onSaveButtonColor: E,
            disabled: b,
            saveButtonTooltip: y,
        } = e,
        O = i.useRef(null),
        [v, S] = i.useState(!1);
    return (
        i.useEffect(() => {
            function e() {
                S(!0), setTimeout(() => S(!1), 1000);
            }
            return (
                l.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e),
                () => {
                    l.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, r.jsx)("div", {
            className: d.container,
            "data-emphasized": v,
            children: (0, r.jsx)("div", {
                className: d.flexContainer,
                ref: O,
                children: (0, r.jsxs)(s.JcV, {
                    containerRef: O,
                    children: [
                        (0, r.jsx)("div", {
                            className: d.shrinkingContainer,
                            children: (0, r.jsx)("div", {
                                className: d.message,
                                children: null != (t = null != f ? f : n) ? t : u.intl.string(u.t.GP7JLE),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: d.actions,
                            children: [
                                null != _ &&
                                    (0, r.jsx)(o.zx, {
                                        className: d.resetButton,
                                        size: o.zx.Sizes.SMALL,
                                        color: o.zx.Colors.PRIMARY,
                                        look: o.zx.Looks.LINK,
                                        onClick: _,
                                        children: (0, r.jsx)("span", {
                                            children: null != g ? g : u.intl.string(u.t.yBZMsQ),
                                        }),
                                    }),
                                null != m
                                    ? (0, r.jsx)(a.u, {
                                          text: y,
                                          children: (0, r.jsx)(o.zx, {
                                              size: o.zx.Sizes.SMALL,
                                              color: null != E ? E : o.zx.Colors.GREEN,
                                              submitting: p,
                                              disabled: b,
                                              onClick: m,
                                              children: null != h ? h : u.intl.string(u.t.K344S7),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
};

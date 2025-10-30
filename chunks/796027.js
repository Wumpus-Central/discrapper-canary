n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(28664),
    o = n(755721),
    s = n(481060),
    l = n(585483),
    c = n(981631),
    u = n(388032),
    d = n(920463);
let f = function (e) {
    var t;
    let {
            message: n,
            errorMessage: f,
            submitting: _,
            onReset: p,
            onSave: h,
            onSaveText: m,
            onResetText: g,
            onSaveButtonColor: E,
            disabled: b,
            saveButtonTooltip: y,
        } = e,
        O = i.useRef(null),
        [v, I] = i.useState(!1);
    return (
        i.useEffect(() => {
            function e() {
                I(!0), setTimeout(() => I(!1), 1000);
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
                                null != p &&
                                    (0, r.jsx)(o.zx, {
                                        className: d.resetButton,
                                        size: o.zx.Sizes.SMALL,
                                        color: o.zx.Colors.PRIMARY,
                                        look: o.zx.Looks.LINK,
                                        onClick: p,
                                        children: (0, r.jsx)("span", {
                                            children: null != g ? g : u.intl.string(u.t.yBZMsQ),
                                        }),
                                    }),
                                null != h
                                    ? (0, r.jsx)(a.u, {
                                          text: y,
                                          children: (0, r.jsx)(o.zx, {
                                              size: o.zx.Sizes.SMALL,
                                              color: null != E ? E : o.zx.Colors.GREEN,
                                              submitting: _,
                                              disabled: b,
                                              onClick: h,
                                              children: null != m ? m : u.intl.string(u.t.K344S7),
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

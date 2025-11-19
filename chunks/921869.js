t.d(a, { m: () => h });
var n = t(54381),
    r = t(473749),
    s = t(442837),
    l = t(481060),
    i = t(600164),
    o = t(553795),
    c = t(424071),
    d = t(239358),
    x = t(388032),
    u = t(771831);
function h(e) {
    let {
            platformType: a,
            onContinue: t,
            onClose: h,
            img: m,
            headerConnect: N,
            headerReconnect: C,
            body: j,
            learnMoreLink: p,
            valueProps: v,
        } = e,
        b = (0, s.e7)([o.Z], () => {
            let e = o.Z.getAccount(null, a);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, n.jsxs)(c.Z, {
        children: [
            (0, n.jsxs)(l.xBx, {
                direction: i.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, n.jsxs)("div", {
                        className: u.illustration,
                        children: [m, " "],
                    }),
                    (0, n.jsx)(l.Heading, {
                        className: u.title,
                        variant: "heading-xl/extrabold",
                        children: b && null != C ? C : N,
                    }),
                    (0, n.jsx)(l.olH, {
                        className: u.closeButton,
                        onClick: h,
                    }),
                ],
            }),
            (0, n.jsxs)(l.hzk, {
                className: u.body,
                children: [
                    (0, n.jsx)(l.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: j,
                    }),
                    (0, n.jsx)("div", {
                        className: u.valueProps,
                        children: v.map((e, a) => {
                            let { label: t, subLabel: s, icon: l } = e;
                            return (0, n.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, n.jsx)(
                                            d.Z,
                                            {
                                                label: t,
                                                subLabel: s,
                                                icon: l,
                                            },
                                            t,
                                        ),
                                        a !== v.length - 1 && (0, n.jsx)("div", { className: u.valuePropDivider }),
                                    ],
                                },
                                t,
                            );
                        }),
                    }),
                    null != p
                        ? (0, n.jsx)(l.Text, {
                              tag: "p",
                              variant: "text-sm/normal",
                              color: "header-secondary",
                              children: x.intl.format(x.t["/l3n+1"], { helpCenterLink: p }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(l.mzw, {
                className: u.footer,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: u.footerButton,
                    children: (0, n.jsx)(l.Button, {
                        variant: "primary",
                        text: x.intl.string(x.t["3PatSz"]),
                        onClick: t,
                    }),
                }),
            }),
        ],
    });
}

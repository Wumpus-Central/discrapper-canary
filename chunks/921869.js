a.d(t, { m: () => m });
var l = a(54381),
    n = a(473749),
    s = a(442837),
    r = a(481060),
    i = a(600164),
    o = a(553795),
    c = a(424071),
    d = a(239358),
    u = a(388032),
    x = a(771831);
function m(e) {
    let {
            platformType: t,
            onContinue: a,
            onClose: m,
            img: h,
            headerConnect: N,
            headerReconnect: C,
            body: j,
            learnMoreLink: p,
            valueProps: v,
        } = e,
        f = (0, s.e7)([o.Z], () => {
            let e = o.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, l.jsxs)(c.Z, {
        children: [
            (0, l.jsxs)(r.xBx, {
                direction: i.Z.Direction.VERTICAL,
                className: x.header,
                separator: !1,
                children: [
                    (0, l.jsxs)("div", {
                        className: x.illustration,
                        children: [h, " "],
                    }),
                    (0, l.jsx)(r.Heading, {
                        className: x.title,
                        variant: "heading-xl/extrabold",
                        children: f && null != C ? C : N,
                    }),
                    (0, l.jsx)(r.olH, {
                        className: x.closeButton,
                        onClick: m,
                    }),
                ],
            }),
            (0, l.jsxs)(r.hzk, {
                className: x.body,
                children: [
                    (0, l.jsx)(r.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: j,
                    }),
                    (0, l.jsx)("div", {
                        className: x.valueProps,
                        children: v.map((e, t) => {
                            let { label: a, subLabel: s, icon: r } = e;
                            return (0, l.jsxs)(
                                n.Fragment,
                                {
                                    children: [
                                        (0, l.jsx)(
                                            d.Z,
                                            {
                                                label: a,
                                                subLabel: s,
                                                icon: r,
                                            },
                                            a,
                                        ),
                                        t !== v.length - 1 && (0, l.jsx)("div", { className: x.valuePropDivider }),
                                    ],
                                },
                                a,
                            );
                        }),
                    }),
                    null != p
                        ? (0, l.jsx)(r.Text, {
                              tag: "p",
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: u.intl.format(u.t["/l3n+1"], { helpCenterLink: p }),
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(r.mzw, {
                className: x.footer,
                children: (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: x.footerButton,
                    children: (0, l.jsx)(r.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t["3PatSz"]),
                        onClick: a,
                    }),
                }),
            }),
        ],
    });
}

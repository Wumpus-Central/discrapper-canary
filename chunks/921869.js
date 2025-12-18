a.d(t, { m: () => m });
var n = a(54381),
    r = a(473749),
    i = a(442837),
    l = a(481060),
    s = a(600164),
    o = a(553795),
    c = a(424071),
    d = a(239358),
    u = a(388032),
    x = a(926375);
function m(e) {
    let {
            platformType: t,
            onContinue: a,
            onClose: m,
            img: h,
            headerConnect: N,
            headerReconnect: p,
            body: g,
            learnMoreLink: C,
            valueProps: j,
        } = e,
        v = (0, i.e7)([o.Z], () => {
            let e = o.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, n.jsxs)(c.Z, {
        children: [
            (0, n.jsxs)(l.xBx, {
                "data-migration-pending": !0,
                direction: s.Z.Direction.VERTICAL,
                className: x.header,
                separator: !1,
                children: [
                    (0, n.jsxs)("div", {
                        className: x.illustration,
                        children: [h, " "],
                    }),
                    (0, n.jsx)(l.Heading, {
                        className: x.title,
                        variant: "heading-xl/extrabold",
                        children: v && null != p ? p : N,
                    }),
                    (0, n.jsx)(l.olH, {
                        className: x.closeButton,
                        onClick: m,
                    }),
                ],
            }),
            (0, n.jsxs)(l.hzk, {
                "data-migration-pending": !0,
                className: x.body,
                children: [
                    (0, n.jsx)(l.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "text-default",
                        children: g,
                    }),
                    (0, n.jsx)("div", {
                        className: x.valueProps,
                        children: j.map((e, t) => {
                            let { label: a, subLabel: i, icon: l } = e;
                            return (0, n.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, n.jsx)(
                                            d.Z,
                                            {
                                                label: a,
                                                subLabel: i,
                                                icon: l,
                                            },
                                            a,
                                        ),
                                        t !== j.length - 1 && (0, n.jsx)("div", { className: x.valuePropDivider }),
                                    ],
                                },
                                a,
                            );
                        }),
                    }),
                    null != C
                        ? (0, n.jsx)(l.Text, {
                              tag: "p",
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: u.intl.format(u.t["/l3n+1"], { helpCenterLink: C }),
                          })
                        : null,
                ],
            }),
            (0, n.jsx)(l.mzw, {
                "data-migration-pending": !0,
                className: x.footer,
                children: (0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: x.footerButton,
                    children: (0, n.jsx)(l.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t["3PatSz"]),
                        onClick: a,
                    }),
                }),
            }),
        ],
    });
}

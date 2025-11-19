n.d(t, {
    h: () => c,
    m: () => u,
});
var r = n(54381);
n(473749);
var i = n(159691),
    l = n(481060),
    a = n(17894),
    o = n(388032),
    s = n(989646);
let c = (e) => {
    let { onConfirm: t, onCancel: n, title: c, subtitle: u, confirmCta: d, showOpenDiscord: m = !0 } = e;
    return (0, r.jsxs)("div", {
        className: s.confirmationContainer,
        children: [
            (0, r.jsx)(l.Heading, {
                className: s.confirmationHeader,
                variant: "heading-lg/extrabold",
                children: c,
            }),
            null != u
                ? (0, r.jsx)(l.Text, {
                      className: s.confirmationSubtitle,
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      children: u,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: s.buttonContainer,
                children: [
                    m &&
                        (0, r.jsx)(i.zxk, {
                            variant: "primary",
                            text: o.intl.string(o.t["8L5bZG"]),
                            fullWidth: !0,
                            onClick: () => (0, a.Z)("application_sub_mweb_success_modal"),
                        }),
                    (0, r.jsx)(i.zxk, {
                        variant: "secondary",
                        text: d,
                        fullWidth: !0,
                        onClick: t,
                    }),
                    null != n &&
                        (0, r.jsx)(i.zxk, {
                            variant: "secondary",
                            text: o.intl.string(o.t.iAfxo3),
                            fullWidth: !0,
                            onClick: n,
                        }),
                ],
            }),
        ],
    });
};
function u(e) {
    let { onConfirm: t, tierName: n, subscription: c } = e;
    return (0, r.jsxs)("div", {
        className: s.confirmationContainer,
        children: [
            (0, r.jsx)(l.Heading, {
                className: s.confirmationHeader,
                variant: "heading-lg/extrabold",
                children: o.intl.format(o.t.wLFT6z, { tier: n }),
            }),
            (0, r.jsx)(l.Text, {
                className: s.confirmationSubtitle,
                variant: "text-sm/normal",
                color: "header-secondary",
                children: o.intl.format(o.t.OsAK9h, { timestamp: null == c ? void 0 : c.currentPeriodEnd }),
            }),
            (0, r.jsxs)("div", {
                className: s.buttonContainer,
                children: [
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: s.__invalid_openDiscordButton,
                        children: (0, r.jsx)(i.zxk, {
                            variant: "primary",
                            text: o.intl.string(o.t["8L5bZG"]),
                            onClick: () => (0, a.Z)("application_sub_mweb_success_modal"),
                        }),
                    }),
                    (0, r.jsx)(i.zxk, {
                        variant: "secondary",
                        text: o.intl.string(o.t.nlkywz),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}

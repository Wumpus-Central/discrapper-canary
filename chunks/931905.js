n.d(t, {
    h: () => s,
    m: () => c
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(17894),
    a = n(388032),
    o = n(157020);
let s = (e) => {
    let { onConfirm: t, onCancel: n, title: s, subtitle: c, confirmCta: u, showOpenDiscord: d = !0 } = e;
    return (0, i.jsxs)('div', {
        className: o.confirmationContainer,
        children: [
            (0, i.jsx)(r.X6q, {
                className: o.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: s
            }),
            null != c
                ? (0, i.jsx)(r.Text, {
                      className: o.confirmationSubtitle,
                      variant: 'text-sm/normal',
                      color: 'header-secondary',
                      children: c
                  })
                : null,
            (0, i.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    d &&
                        (0, i.jsx)(r.zxk, {
                            fullWidth: !0,
                            onClick: () => (0, l.Z)('application_sub_mweb_success_modal'),
                            children: a.intl.string(a.t['8L5bZG'])
                        }),
                    (0, i.jsx)(r.zxk, {
                        fullWidth: !0,
                        color: r.zxk.Colors.PRIMARY,
                        onClick: t,
                        children: u
                    }),
                    null != n &&
                        (0, i.jsx)(r.zxk, {
                            fullWidth: !0,
                            color: r.zxk.Colors.PRIMARY,
                            look: r.zxk.Looks.LINK,
                            onClick: n,
                            children: a.intl.string(a.t.iAfxo6)
                        })
                ]
            })
        ]
    });
};
function c(e) {
    let { onConfirm: t, tierName: n, subscription: s } = e;
    return (0, i.jsxs)('div', {
        className: o.confirmationContainer,
        children: [
            (0, i.jsx)(r.X6q, {
                className: o.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: a.intl.format(a.t['wLFT6+'], { tier: n })
            }),
            (0, i.jsx)(r.Text, {
                className: o.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.intl.format(a.t.OsAK9v, { timestamp: null == s ? void 0 : s.currentPeriodEnd })
            }),
            (0, i.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    (0, i.jsx)(r.zxk, {
                        className: o.__invalid_openDiscordButton,
                        onClick: () => (0, l.Z)('application_sub_mweb_success_modal'),
                        children: a.intl.string(a.t['8L5bZG'])
                    }),
                    (0, i.jsx)(r.zxk, {
                        className: o.__invalid_doneButton,
                        look: r.zxk.Looks.BLANK,
                        onClick: t,
                        children: a.intl.string(a.t.nlkyw8)
                    })
                ]
            })
        ]
    });
}

n.d(t, {
    h: () => s,
    m: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(17894),
    a = n(388032),
    o = n(157020);
let s = (e) => {
    let { onConfirm: t, onCancel: n, title: s, subtitle: c, confirmCta: u, showOpenDiscord: d = !0 } = e;
    return (0, r.jsxs)('div', {
        className: o.confirmationContainer,
        children: [
            (0, r.jsx)(i.X6q, {
                className: o.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: s
            }),
            null != c
                ? (0, r.jsx)(i.Text, {
                      className: o.confirmationSubtitle,
                      variant: 'text-sm/normal',
                      color: 'header-secondary',
                      children: c
                  })
                : null,
            (0, r.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    d &&
                        (0, r.jsx)(i.zxk, {
                            fullWidth: !0,
                            onClick: () => (0, l.Z)('application_sub_mweb_success_modal'),
                            children: a.NW.string(a.t['8L5bZG'])
                        }),
                    (0, r.jsx)(i.zxk, {
                        fullWidth: !0,
                        color: i.zxk.Colors.PRIMARY,
                        onClick: t,
                        children: u
                    }),
                    null != n &&
                        (0, r.jsx)(i.zxk, {
                            fullWidth: !0,
                            color: i.zxk.Colors.PRIMARY,
                            look: i.zxk.Looks.LINK,
                            onClick: n,
                            children: a.NW.string(a.t.iAfxo6)
                        })
                ]
            })
        ]
    });
};
function c(e) {
    let { onConfirm: t, tierName: n, subscription: s } = e;
    return (0, r.jsxs)('div', {
        className: o.confirmationContainer,
        children: [
            (0, r.jsx)(i.X6q, {
                className: o.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: a.NW.format(a.t['wLFT6+'], { tier: n })
            }),
            (0, r.jsx)(i.Text, {
                className: o.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.NW.format(a.t.OsAK9v, { timestamp: null == s ? void 0 : s.currentPeriodEnd })
            }),
            (0, r.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    (0, r.jsx)(i.zxk, {
                        className: o.__invalid_openDiscordButton,
                        onClick: () => (0, l.Z)('application_sub_mweb_success_modal'),
                        children: a.NW.string(a.t['8L5bZG'])
                    }),
                    (0, r.jsx)(i.zxk, {
                        className: o.__invalid_doneButton,
                        look: i.zxk.Looks.BLANK,
                        onClick: t,
                        children: a.NW.string(a.t.nlkyw8)
                    })
                ]
            })
        ]
    });
}

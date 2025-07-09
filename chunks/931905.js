n.d(t, {
    h: () => c,
    m: () => u
});
var i = n(255367);
n(73800);
var r = n(755721),
    l = n(481060),
    a = n(17894),
    o = n(388032),
    s = n(157020);
let c = (e) => {
    let { onConfirm: t, onCancel: n, title: r, subtitle: c, confirmCta: u, showOpenDiscord: d = !0 } = e;
    return (0, i.jsxs)('div', {
        className: s.confirmationContainer,
        children: [
            (0, i.jsx)(l.X6q, {
                className: s.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: r
            }),
            null != c
                ? (0, i.jsx)(l.Text, {
                      className: s.confirmationSubtitle,
                      variant: 'text-sm/normal',
                      color: 'header-secondary',
                      children: c
                  })
                : null,
            (0, i.jsxs)('div', {
                className: s.buttonContainer,
                children: [
                    d &&
                        (0, i.jsx)(l.zxk, {
                            variant: 'primary',
                            text: o.intl.string(o.t['8L5bZG']),
                            fullWidth: !0,
                            onClick: () => (0, a.Z)('application_sub_mweb_success_modal')
                        }),
                    (0, i.jsx)(l.zxk, {
                        variant: 'secondary',
                        text: u,
                        fullWidth: !0,
                        onClick: t
                    }),
                    null != n &&
                        (0, i.jsx)(l.zxk, {
                            variant: 'secondary',
                            text: o.intl.string(o.t.iAfxo6),
                            fullWidth: !0,
                            onClick: n
                        })
                ]
            })
        ]
    });
};
function u(e) {
    let { onConfirm: t, tierName: n, subscription: c } = e;
    return (0, i.jsxs)('div', {
        className: s.confirmationContainer,
        children: [
            (0, i.jsx)(l.X6q, {
                className: s.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: o.intl.format(o.t['wLFT6+'], { tier: n })
            }),
            (0, i.jsx)(l.Text, {
                className: s.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: o.intl.format(o.t.OsAK9v, { timestamp: null == c ? void 0 : c.currentPeriodEnd })
            }),
            (0, i.jsxs)('div', {
                className: s.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: s.__invalid_openDiscordButton,
                        children: (0, i.jsx)(l.zxk, {
                            variant: 'primary',
                            text: o.intl.string(o.t['8L5bZG']),
                            onClick: () => (0, a.Z)('application_sub_mweb_success_modal')
                        })
                    }),
                    (0, i.jsx)(r.zx, {
                        className: s.__invalid_doneButton,
                        look: r.zx.Looks.BLANK,
                        onClick: t,
                        children: o.intl.string(o.t.nlkyw8)
                    })
                ]
            })
        ]
    });
}

t.d(e, {
    h: function () {
        return s;
    },
    m: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(17894),
    a = t(388032),
    o = t(753031);
let s = (n) => {
    let { onConfirm: e, onCancel: t, title: s, subtitle: u, confirmCta: c, showOpenDiscord: d = !0 } = n;
    return (0, i.jsxs)('div', {
        className: o.confirmationContainer,
        children: [
            (0, i.jsx)(l.Heading, {
                className: o.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: s
            }),
            null != u
                ? (0, i.jsx)(l.Text, {
                      className: o.confirmationSubtitle,
                      variant: 'text-sm/normal',
                      color: 'header-secondary',
                      children: u
                  })
                : null,
            (0, i.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    d &&
                        (0, i.jsx)(l.Button, {
                            fullWidth: !0,
                            onClick: () => (0, r.Z)('application_sub_mweb_success_modal'),
                            children: a.intl.string(a.t['8L5bZG'])
                        }),
                    (0, i.jsx)(l.Button, {
                        fullWidth: !0,
                        color: l.Button.Colors.PRIMARY,
                        onClick: e,
                        children: c
                    }),
                    null != t &&
                        (0, i.jsx)(l.Button, {
                            fullWidth: !0,
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.LINK,
                            onClick: t,
                            children: a.intl.string(a.t.iAfxo6)
                        })
                ]
            })
        ]
    });
};
function u(n) {
    let { onConfirm: e, tierName: t, subscription: s } = n;
    return (0, i.jsxs)('div', {
        className: o.confirmationContainer,
        children: [
            (0, i.jsx)(l.Heading, {
                className: o.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: a.intl.format(a.t['wLFT6+'], { tier: t })
            }),
            (0, i.jsx)(l.Text, {
                className: o.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.intl.format(a.t.OsAK9v, { timestamp: null == s ? void 0 : s.currentPeriodEnd })
            }),
            (0, i.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    (0, i.jsx)(l.Button, {
                        className: o.__invalid_openDiscordButton,
                        onClick: () => (0, r.Z)('application_sub_mweb_success_modal'),
                        children: a.intl.string(a.t['8L5bZG'])
                    }),
                    (0, i.jsx)(l.Button, {
                        className: o.__invalid_doneButton,
                        look: l.Button.Looks.BLANK,
                        onClick: e,
                        children: a.intl.string(a.t.nlkyw8)
                    })
                ]
            })
        ]
    });
}

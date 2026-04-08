t.d(i, { A: () => d });
var l = t(627968);
t(64700);
var s = t(397927),
    n = t(960736),
    a = t(253932),
    r = t(652215),
    o = t(985018);
function d(e) {
    let { invite: i, closePopout: t } = e,
        d = a.tz.useSetting(),
        {
            nickname: c,
            dmsAllowed: u,
            showActivity: m,
            setNickname: _,
            setDmsAllowed: h,
            setShowActivity: x,
        } = (0, n.lD)(),
        g = i.is_nickname_changeable;
    return (0, l.jsxs)(s.W1t, {
        navId: "accept-invite-modal-settings-menu",
        onClose: t,
        "aria-label": o.intl.string(o.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            g
                ? (0, l.jsx)(s.YnB, {
                      id: "accept-invite-modal-settings-nickname",
                      label: o.intl.string(o.t.me1lRk),
                      value: c,
                      onChange: _,
                      placeholder: o.intl.string(o.t["09Q8yp"]),
                      maxLength: r.d0r,
                  })
                : null,
            (0, l.jsx)(s.fPC, {
                id: "accept-invite-modal-settings-dms",
                label: o.intl.string(o.t["/2ed37"]),
                action: h,
                checked: u,
            }),
            d
                ? (0, l.jsx)(s.fPC, {
                      id: "accept-invite-modal-settings-activity",
                      label: o.intl.string(o.t.bN4m1G),
                      action: x,
                      checked: m,
                  })
                : null,
        ],
    });
}

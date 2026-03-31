i.d(t, { A: () => o });
var l = i(627968);
i(64700);
var n = i(397927),
    a = i(960736),
    s = i(253932),
    r = i(652215),
    d = i(985018);
function o(e) {
    let { invite: t, closePopout: i } = e,
        o = s.tz.useSetting(),
        {
            nickname: c,
            dmsAllowed: u,
            showActivity: m,
            setNickname: x,
            setDmsAllowed: g,
            setShowActivity: h,
        } = (0, a.lD)(),
        _ = t.is_nickname_changeable;
    return (0, l.jsxs)(n.W1t, {
        navId: "accept-invite-modal-settings-menu",
        onClose: i,
        "aria-label": d.intl.string(d.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            _
                ? (0, l.jsx)(n.YnB, {
                      id: "accept-invite-modal-settings-nickname",
                      label: d.intl.string(d.t.me1lRk),
                      value: c,
                      onChange: x,
                      placeholder: d.intl.string(d.t["09Q8yp"]),
                      maxLength: r.d0r,
                  })
                : null,
            (0, l.jsx)(n.fPC, {
                id: "accept-invite-modal-settings-dms",
                label: d.intl.string(d.t["/2ed37"]),
                action: g,
                checked: u,
            }),
            o
                ? (0, l.jsx)(n.fPC, {
                      id: "accept-invite-modal-settings-activity",
                      label: d.intl.string(d.t.bN4m1G),
                      action: h,
                      checked: m,
                  })
                : null,
        ],
    });
}

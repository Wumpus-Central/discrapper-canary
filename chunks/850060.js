n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(954571),
    a = n(253932),
    s = n(652215),
    o = n(985018);
function c() {
    let e = a.D_.useSetting(),
        t = a.SI.useSetting();
    return e
        ? null
        : (0, i.jsx)(l.sLh, {
              id: "preview-markdown-toggle",
              label: o.intl.string(o.t.sHJ9wZ),
              action: () => {
                  let e = !t;
                  r.default.track(s.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: s.JJy.SETTINGS_CONTEXT_MENU },
                  }),
                      a.SI.updateSetting(e);
              },
              checked: t,
          });
}

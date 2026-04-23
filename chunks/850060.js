n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(477782),
    l = n(954571),
    a = n(253932),
    r = n(652215),
    o = n(985018);
function d() {
    let e = a.D_.useSetting(),
        t = a.SI.useSetting();
    return e
        ? null
        : (0, i.jsx)(s.sL, {
              id: "preview-markdown-toggle",
              label: o.intl.string(o.t.sHJ9wZ),
              action: () => {
                  let e = !t;
                  l.default.track(r.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: r.JJy.SETTINGS_CONTEXT_MENU },
                  }),
                      a.SI.updateSetting(e);
              },
              checked: t,
          });
}

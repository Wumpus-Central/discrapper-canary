t.d(n, { A: () => o });
var l = t(627968);
t(64700);
var i = t(397927),
    a = t(954571),
    s = t(253932),
    r = t(652215),
    c = t(985018);
function o() {
    let e = s.D_.useSetting(),
        n = s.SI.useSetting();
    return e
        ? null
        : (0, l.jsx)(i.sLh, {
              id: "preview-markdown-toggle",
              label: c.intl.string(c.t.sHJ9wZ),
              action: () => {
                  let e = !n;
                  a.default.track(r.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                      enabled: e,
                      location: { section: r.JJy.SETTINGS_CONTEXT_MENU },
                  }),
                      s.SI.updateSetting(e);
              },
              checked: n,
          });
}

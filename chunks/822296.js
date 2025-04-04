n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(872810),
    c = n(493773),
    u = n(540059),
    d = n(569545),
    f = n(592125),
    _ = n(112560),
    p = n(231338),
    h = n(388032),
    m = n(65558);
let g = n(340109);
function E(e) {
    let { stream: t, width: n, noArt: i = !1, selected: E = !1 } = e,
        b = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channelId)),
        y = (0, u.Q3)('StreamEnded');
    function v(e) {
        return e < 550 ? 'small' : e < 1000 ? 'medium' : 'large';
    }
    (0, c.ZP)(() => {
        (null == b ? void 0 : b.isGuildStageVoice()) && (0, l.aP)((0, d.V9)(t), !1);
    });
    let O = () => (0, l.aP)((0, d.V9)(t)),
        I = h.NW.string(h.t['4EGMWF']),
        S = v(n);
    return y
        ? (0, r.jsx)(s.f6W, {
              disableAdaptiveTheme: !0,
              theme: p.BR.MIDNIGHT,
              children: (e) =>
                  (0, r.jsx)('div', {
                      className: o()(m.container, e),
                      children: (0, r.jsxs)('div', {
                          className: m.content,
                          children: [
                              (0, r.jsx)('div', {
                                  className: o()(m.artContainer, m[S]),
                                  children: (0, r.jsx)('div', { className: o()(m.art, m[S]) })
                              }),
                              (0, r.jsxs)('div', {
                                  className: m.cta,
                                  children: [
                                      (0, r.jsx)(s.X6q, {
                                          color: 'none',
                                          variant: 'small' === S ? 'heading-md/normal' : 'heading-lg/normal',
                                          className: m.header,
                                          children: h.NW.formatToMarkdownString(h.t.Kb4Ukp, {})
                                      }),
                                      (0, r.jsx)(s.zxk, {
                                          size: 'small' === S ? s.zxk.Sizes.MEDIUM : s.zxk.Sizes.LARGE,
                                          color: s.zxk.Colors.PRIMARY,
                                          onClick: (e) => {
                                              e.stopPropagation(), O();
                                          },
                                          children: (0, r.jsx)(s.Text, {
                                              color: 'none',
                                              variant: 'text-md/semibold',
                                              children: I
                                          })
                                      })
                                  ]
                              })
                          ]
                      })
                  })
          })
        : (0, r.jsx)(_.Z, {
              artURL: g,
              noArt: i,
              selected: E,
              size: (0, _.L)(n),
              header: h.NW.formatToMarkdownString(h.t['1Ww0Hh'], {}),
              onCTAClick: O,
              callToAction: I
          });
}

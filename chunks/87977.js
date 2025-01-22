Object.defineProperty(n, '__esModule', { value: !0 }), (n.Raised = void 0);
var i = l(r(192379)),
    a = l(r(476400)),
    o = l(r(723184)),
    s = l(r(429867));
function l(e) {
    return e && e.__esModule ? e : { default: e };
}
var u = (n.Raised = function (e) {
    var n = e.zDepth,
        r = e.radius,
        a = e.background,
        l = e.children,
        u = e.styles,
        c = void 0 === u ? {} : u,
        d = (0, o.default)(
            (0, s.default)(
                {
                    default: {
                        wrap: {
                            position: 'relative',
                            display: 'inline-block'
                        },
                        content: { position: 'relative' },
                        bg: {
                            absolute: '0px 0px 0px 0px',
                            boxShadow: '0 ' + n + 'px ' + 4 * n + 'px rgba(0,0,0,.24)',
                            borderRadius: r,
                            background: a
                        }
                    },
                    'zDepth-0': { bg: { boxShadow: 'none' } },
                    'zDepth-1': { bg: { boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)' } },
                    'zDepth-2': { bg: { boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)' } },
                    'zDepth-3': { bg: { boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)' } },
                    'zDepth-4': { bg: { boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)' } },
                    'zDepth-5': { bg: { boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)' } },
                    square: { bg: { borderRadius: '0' } },
                    circle: { bg: { borderRadius: '50%' } }
                },
                c
            ),
            { 'zDepth-1': 1 === n }
        );
    return i.default.createElement('div', { style: d.wrap }, i.default.createElement('div', { style: d.bg }), i.default.createElement('div', { style: d.content }, l));
});
(u.propTypes = {
    background: a.default.string,
    zDepth: a.default.oneOf([0, 1, 2, 3, 4, 5]),
    radius: a.default.number,
    styles: a.default.object
}),
    (u.defaultProps = {
        background: '#fff',
        zDepth: 1,
        radius: 2,
        styles: {}
    }),
    (n.default = u);

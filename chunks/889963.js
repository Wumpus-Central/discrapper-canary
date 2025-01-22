r.d(n, {
    W: function () {
        return f;
    },
    s: function () {
        return i;
    }
});
var i,
    a,
    o = r(47120);
var s = r(653041);
var l = r(192379),
    u = r(392711),
    c = r.n(u);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.PAGE = 'PAGE'), (e.GAP = 'GAP'), (e.BACK = 'BACK'), (e.NEXT = 'NEXT');
})(i || (i = {}));
class f extends (a = l.PureComponent) {
    getNeighborBounds() {
        let { totalPageCount: e, maxVisiblePages: n, selectedPage: r } = this.props,
            i = Math.ceil(n / 2),
            a = Math.floor(n / 2),
            o = [1, e],
            [s, l] = (o = r <= i ? [1, n] : r > e - a ? [e - n + 1, e] : [r - i + 1, r + a]);
        return [Math.max(s, 1), Math.min(l, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: n, hideMaxPage: r } = this.props,
            [i, a] = this.getNeighborBounds(),
            o = {
                type: 'BACK',
                key: 'back',
                disabled: 1 === n,
                selected: !1,
                navigateToPage: this.handleBackward
            },
            s = {
                type: 'NEXT',
                key: 'next',
                disabled: n === e,
                selected: !1,
                navigateToPage: this.handleForward
            },
            l = [],
            u = [];
        return (
            i > 1 &&
                ((l = [
                    {
                        type: 'PAGE',
                        key: 'page-1',
                        targetPage: 1,
                        navigateToPage: () => this.handleJump(1)
                    },
                    {
                        type: 'GAP',
                        key: 'left-gap'
                    }
                ]),
                (i += 2)),
            a < e &&
                ((u = [
                    {
                        type: 'GAP',
                        key: 'right-gap'
                    }
                ]),
                !r &&
                    u.push({
                        type: 'PAGE',
                        key: 'page-'.concat(e),
                        targetPage: e,
                        navigateToPage: () => this.handleJump(e)
                    }),
                (a -= 2)),
            [
                o,
                ...l,
                ...c()
                    .range(i, a + 1)
                    .map((e) => ({
                        type: 'PAGE',
                        key: 'page-'.concat(e),
                        targetPage: e,
                        selected: e === n,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e)
                    })),
                ...u,
                s
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: n } = this.props;
        return n({
            pages: this.getPageList(),
            hasMultiplePages: e > 1
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'changePageTo', (e) => {
                let { selectedPage: n, onPageChange: r } = this.props;
                n !== e && null != r && r(e);
            }),
            d(this, 'handleForward', () => {
                this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount));
            }),
            d(this, 'handleBackward', () => {
                this.changePageTo(Math.max(this.props.selectedPage - 1, 1));
            }),
            d(this, 'handleJump', (e) => {
                this.changePageTo(e);
            });
    }
}
d(f, 'defaultProps', {
    maxVisiblePages: 9,
    hideMaxPage: !1
});

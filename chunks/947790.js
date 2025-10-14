r.d(t, { g: () => c }), r(388685);
var n = r(647438),
    i = r(100568),
    a = r(417865),
    o = r(665379),
    l = r(86419);
function c(e) {
    let { dragRef: t, dropRef: r, index: c, widgetType: s, game: u } = e,
        d = "GAME_COVER_".concat(s),
        g = n.useCallback(
            (e, t) => {
                (0, l.Eq)(s, e, t);
            },
            [s],
        ),
        [{ isDragging: f }, p, b] = (0, i.c)({
            type: d,
            item: {
                index: c,
                id: u.applicationId,
                itemType: "GAME_COVER",
                gameName: u.gameName,
                imageSrc: u.imageSrc,
            },
            collect: (e) => ({
                handlerId: e.getHandlerId(),
                isDragging: e.isDragging(),
            }),
        });
    n.useEffect(() => {
        b((0, o.r)(), { captureDraggingState: !0 });
    }, [b]);
    let [{ dragSourcePosition: m }, O] = (0, a.L)({
        accept: d,
        drop: (e) => {
            let t = e.index;
            t !== c && (g(t, c), (e.index = c));
        },
        collect: (e) => {
            let t = e.getItem(),
                r = null;
            return (
                null != t && e.isOver() && e.canDrop() && (r = t.index),
                {
                    handlerId: e.getHandlerId(),
                    dragSourcePosition: r,
                }
            );
        },
    });
    return (
        p(t),
        O(r),
        {
            isDragging: f,
            dragSourcePosition: m,
        }
    );
}

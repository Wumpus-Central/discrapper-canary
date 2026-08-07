i.d(t, { A: () => u });
var n = i(17928),
    l = i(228366),
    a = i(754674);
let r = {};
function s(e) {
    let t = r[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class d extends n.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return r[e]?.draft;
    }
    isEditing(e) {
        return null != r[e];
    }
    getSaveStatus(e) {
        return r[e]?.saveStatus ?? "idle";
    }
}
let u = new d(l.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: i } = e;
        r[t] = { draft: { header: i.header, widgets: (0, a.W$)(i.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: i } = e,
            n = s(t);
        if (null == n) return !1;
        n.draft = { ...n.draft, widgets: (0, a.QD)(n.draft.widgets, i) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i, targetColumn: n, targetIndex: l } = e,
            r = s(t);
        if (null == r) return !1;
        let d = (0, a.Gm)(r.draft.widgets, i, n, l);
        if (null == d) return !1;
        r.draft = { ...r.draft, widgets: d };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: i } = e,
            n = s(t);
        if (null == n) return !1;
        let l = n.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== i;
        });
        if (l.length === n.draft.widgets.length) return !1;
        n.draft = { ...n.draft, widgets: (0, a.W$)(l) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: i, config: n } = e,
            l = s(t);
        if (null == l) return !1;
        let a = l.draft.widgets.map((e) => (e.id === i ? { ...e, config: n } : e));
        l.draft = { ...l.draft, widgets: a };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: i } = e,
            n = r[t];
        if (null == n) return !1;
        (n.saveStatus = "saving"), (n.activeSaveRequestId = i);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: i } = e,
            n = r[t];
        if (n?.activeSaveRequestId !== i) return !1;
        delete n.activeSaveRequestId, (n.saveStatus = "error");
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == r[t]) return !1;
        delete r[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == r[t]) return !1;
        delete r[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: i },
        } = e;
        if (i || null == r[t]) return !1;
        delete r[t];
    },
    LOGOUT: function () {
        r = {};
    },
});

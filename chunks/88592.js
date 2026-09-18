n.d(t, { A: () => d });
var l = n(17928),
    r = n(228366),
    i = n(754674);
let a = {};
function s(e) {
    let t = a[e];
    return t?.saveStatus === "saving" ? void 0 : t;
}
class u extends l.Ay.Store {
    static displayName = "GuildSpaceEditorStore";
    getDraft(e) {
        return a[e]?.draft;
    }
    isEditing(e) {
        return null != a[e];
    }
    getSaveStatus(e) {
        return a[e]?.saveStatus ?? "idle";
    }
    getSaveErrorMessage(e) {
        return a[e]?.saveErrorMessage;
    }
}
let d = new u(r.h, {
    GUILD_SPACE_EDIT_START: function (e) {
        let { guildId: t, space: n } = e;
        a[t] = { draft: { header: n.header, widgets: (0, i.W$)(n.widgets) }, saveStatus: "idle" };
    },
    GUILD_SPACE_EDIT_ADD_WIDGET: function (e) {
        let { guildId: t, widget: n, insertionTarget: l } = e,
            r = s(t);
        if (null == r) return !1;
        r.draft = { ...r.draft, widgets: (0, i.QD)(r.draft.widgets, n, l) };
    },
    GUILD_SPACE_EDIT_MOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n, targetColumn: l, targetIndex: r } = e,
            a = s(t);
        if (null == a) return !1;
        let u = (0, i.Gm)(a.draft.widgets, n, l, r);
        if (null == u) return !1;
        a.draft = { ...a.draft, widgets: u };
    },
    GUILD_SPACE_EDIT_REMOVE_WIDGET: function (e) {
        let { guildId: t, widgetId: n } = e,
            l = s(t);
        if (null == l) return !1;
        let r = l.draft.widgets.filter((e) => {
            let { id: t } = e;
            return t !== n;
        });
        if (r.length === l.draft.widgets.length) return !1;
        l.draft = { ...l.draft, widgets: (0, i.W$)(r) };
    },
    GUILD_SPACE_EDIT_UPDATE_WIDGET_CONFIG: function (e) {
        let { guildId: t, widgetId: n, config: l } = e,
            r = s(t);
        if (null == r) return !1;
        let i = r.draft.widgets.map((e) => (e.id === n ? { ...e, config: l } : e));
        r.draft = { ...r.draft, widgets: i };
    },
    GUILD_SPACE_EDIT_UPDATE_HEADER: function (e) {
        let { guildId: t, customBanner: n } = e,
            l = s(t);
        if (null == l) return !1;
        l.draft = { ...l.draft, header: { ...l.draft.header, custom_banner: n } };
    },
    GUILD_SPACE_EDIT_SAVE_START: function (e) {
        let { guildId: t, requestId: n } = e,
            l = a[t];
        if (null == l) return !1;
        ((l.saveStatus = "saving"), (l.activeSaveRequestId = n), delete l.saveErrorMessage);
    },
    GUILD_SPACE_EDIT_SAVE_FAILURE: function (e) {
        let { guildId: t, requestId: n, errorMessage: l } = e,
            r = a[t];
        if (r?.activeSaveRequestId !== n) return !1;
        (delete r.activeSaveRequestId, (r.saveStatus = "error"), (r.saveErrorMessage = l));
    },
    GUILD_SPACE_EDIT_CANCEL: function (e) {
        let { guildId: t } = e;
        if (null == a[t]) return !1;
        delete a[t];
    },
    GUILD_SPACE_UPDATE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == a[t]) return !1;
        delete a[t];
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: n },
        } = e;
        if (n || null == a[t]) return !1;
        delete a[t];
    },
    LOGOUT: function () {
        a = {};
    },
});

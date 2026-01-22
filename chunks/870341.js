n.d(t, {
    A: () => r,
});
var a = n(627968);
n(64700);
var l = n(278466),
    i = n(62153);
let r = (e) => {
    var t;
    let { onSubmit: n, disabled: r } = e,
        { task: s } = (0, l.Z)(),
        o = i.a[s.ui_component.component.type];
    return null == o
        ? null
        : (0, a.jsx)(o, {
              configData: s.ui_component.component.data,
              onSubmit: n,
              taskId: s.task_id,
              flowId: null == (t = s.flow_context) ? void 0 : t.flow_id,
              assignmentId: s.assignment_id,
              disabled: r,
          });
};

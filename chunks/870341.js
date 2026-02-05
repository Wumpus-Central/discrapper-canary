n.d(t, { A: () => l });
var a = n(627968);
n(64700);
var s = n(278466),
    i = n(62153);
let l = (e) => {
    let { onSubmit: t, disabled: n } = e,
        { task: l } = (0, s.Z)(),
        r = i.a[l.ui_component.component.type];
    return null == r
        ? null
        : (0, a.jsx)(r, {
              configData: l.ui_component.component.data,
              onSubmit: t,
              taskId: l.task_id,
              flowId: l.flow_context?.flow_id,
              assignmentId: l.assignment_id,
              disabled: n,
          });
};

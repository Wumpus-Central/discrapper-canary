n.d(t, { A: () => a });
var i = n(627968);
n(64700);
var s = n(278466),
    l = n(62153);
let a = (e) => {
    let { onSubmit: t, disabled: n } = e,
        { task: a } = (0, s.Z)(),
        r = l.a[a.ui_component.component.type];
    return null == r
        ? null
        : (0, i.jsx)(r, {
              configData: a.ui_component.component.data,
              onSubmit: t,
              taskId: a.task_id,
              flowId: a.flow_context?.flow_id,
              assignmentId: a.assignment_id,
              disabled: n,
          });
};

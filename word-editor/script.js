const $actions = document.querySelectorAll('.toolbar a');
$actions.forEach(($action) => {
  $action.addEventListener('click', () => {
    document.execCommand($action.dataset['role'], false);
  });
});

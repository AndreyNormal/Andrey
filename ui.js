const createUi = () => {

  const screen = $("div", { className: "screen" },
    $("div", { className: "scores" }),
    $("div", { className: "settings" }),
  );

  document.body.append(screen);
}
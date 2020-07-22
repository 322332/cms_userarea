import React, { Suspense } from "react";

export default (block) => {
  const Component = React.lazy(() =>
    import(`${block.componentPath}`).then((x) => x)
  );

  if (typeof Component !== "undefined")
    return (
      <Suspense key={block.id} fallback={""}>
        <Component id={block.id} block={block} />
      </Suspense>
    );

  return "bozuldu";
};

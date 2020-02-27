import React, { Suspense } from "react";

//lazy import modules

export default block => {
  const Component = React.lazy(() => import(`${block.path}`).then(x => x));
  if (typeof Component !== "undefined")
    return (
      <Suspense key={block._uid} fallback={<div> Loading...</div>}>
        <Component block={block} key={block._uid} />
      </Suspense>
    );
  return "ZABAĞA GADA BURDAYIZ ZABAĞA GADA";
};

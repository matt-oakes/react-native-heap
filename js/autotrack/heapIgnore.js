import * as _ from 'lodash';
import React from 'react';

export const HeapIgnore = props => {
  // The only purpose of HeapIgnore is to tell the us which props apply to the subtree when we're
  // traversing, so we just need to render it's children here.
  return props.children;
};

export const withHeapIgnore = (IgnoredComponent, heapIgnoreConfig) => {
  return class extends React.Component {
    render() {
      return (
        <HeapIgnore {...heapIgnoreConfig}>
          <IgnoredComponent {...this.props}>
            {this.props.children}
          </IgnoredComponent>
        </HeapIgnore>
      );
    }
  };
};

export const BASE_HEAP_IGNORE_PROPS = {
  ignoreInteraction: true,
  ignoreInnerHierarchy: true,
  ignoreAllProps: true,
  // :TODO: (jmtaber129): Implement 'ignoreSpecificProps'.
  ignoreTargetText: true,
};

export const getNextHeapIgnoreProps = (currProps, element) => {
  if (element.elementName !== 'HeapIgnore') {
    return currProps;
  }

  // Normally, we'd want to check for props on a 'stateNode' that may or may not be present.
  // However, because we know that the HeapIgnore components are functional components, we already
  // know there is not 'stateNode'.
  const specifiedHeapIgnoreProps = _.pick(
    element.fiberNode.memoizedProps,
    Object.keys(BASE_HEAP_IGNORE_PROPS)
  );

  let actualHeapIgnoreProps = {};

  actualHeapIgnoreProps = _.merge(
    {},
    BASE_HEAP_IGNORE_PROPS,
    specifiedHeapIgnoreProps
  );

  // New HeapIgnore props for the subtree should be at least as restrictive as it already was.
  return _.mapValues(currProps, (value, key) => {
    return value || actualHeapIgnoreProps[key];
  });
};

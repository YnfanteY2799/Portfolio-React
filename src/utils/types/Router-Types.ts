export type Route = {
  route: string;
  component: Function;
  childs?: Array<{ route: string; component: Function }>;
};

export type BtnProps = {
  title: string;
  animated?: boolean;
};

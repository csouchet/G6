import {
  Layouts as Layout,
  registerLayout as oRegisterLayout,
  GridLayout,
  RandomLayout,
  ForceLayout,
  CircularLayout,
  DagreLayout,
  RadialLayout,
  ConcentricLayout,
  MDSLayout,
  FruchtermanGPULayout,
  FruchtermanLayout,
  GForceLayout,
  GForceGPULayout,
  ComboForceLayout
} from "@antv/layout";

const registerLayout = (name: string, layoutOverride: any) => {
  layoutOverride.isCustomLayout = true;
  oRegisterLayout(name, layoutOverride);
};

registerLayout("grid", GridLayout);
registerLayout("random", RandomLayout);
registerLayout("force", ForceLayout);
registerLayout("circular", CircularLayout);
registerLayout("dagre", DagreLayout);
registerLayout("radial", RadialLayout);
registerLayout("concentric", ConcentricLayout);
registerLayout("mds", MDSLayout);
registerLayout("fruchterman", FruchtermanLayout);
registerLayout("fruchterman-gpu", FruchtermanGPULayout);
registerLayout("gForce", GForceLayout);
registerLayout("gForce-gpu", GForceGPULayout);
registerLayout("comboForce", ComboForceLayout);

export { Layout, registerLayout };

import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export function Effects({ enabled = true }) {
  if (!enabled) return null;

  return (
    <EffectComposer multisampling={0} stencilBuffer={false}>
      <Vignette
        offset={0.2}
        darkness={0.85}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}

import { Flex, Typography } from "..";
import type { TLabelValue } from "./label-value.types";

const LabelValue = ({ label, value }: TLabelValue) => (
  <Flex direction="row" gap="4" justify="flex-start">
    <Typography size="14">{label}</Typography>
    <Typography size="14" weight="700">
      {value || "Não informado"}
    </Typography>
  </Flex>
);

export default LabelValue;

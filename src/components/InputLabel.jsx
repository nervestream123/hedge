import { Flex, Text } from '@radix-ui/themes';

function InputLabel() {
  return (
    <Flex width="100%" direction="row" align="center" className="mb-[5px]">
      <Text size="1">Enter Ticker</Text>
    </Flex>
  );
}

export default InputLabel;

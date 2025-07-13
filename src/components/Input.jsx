import { Flex, TextField, Button } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

function Input() {
  return (
    <Flex width="100%" direction="row" align="center" className="mb-[15px]">
      <TextField.Root placeholder="AAPL" size="1" className="w-32 mr-[15px]">
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <Button id="submit-button" size="1" className="bg-[#3a0192] h-[20px]! cursor-pointer">Search</Button>
    </Flex>
  );
}

export default Input;

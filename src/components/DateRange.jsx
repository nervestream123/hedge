import { Flex, TextField, Button, Badge, Text } from '@radix-ui/themes';
import { CalendarIcon } from '@radix-ui/react-icons';

function DateRange() {
  return (
    <Flex width="100%" direction="column">
      <Flex width="100%" direction="row" className="mb-[5px]">
        <Text size="1" align="left" className="w-32 mr-[15px]!">Start Date</Text>
        <Text size="1" align="left" className="w-32 mr-[15px]!">End Date</Text>
      </Flex>
      <Flex width="100%" direction="row" align="center" className="mb-[15px]">
        <TextField.Root placeholder="YYYY-MM-DD" size="1" className="w-32 mr-[15px]">
          <TextField.Slot>
            <CalendarIcon height="10" width="10" />
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder="YYYY-MM-DD" size="1" className="w-32 mr-[15px]">
          <TextField.Slot>
            <CalendarIcon height="10" width="10" />
          </TextField.Slot>
        </TextField.Root>

        <Badge size="1" variant="surface" color="indigo" className="cursor-pointer mr-[15px]">Start Evaluation</Badge>
      </Flex>
    </Flex>
  );
}

export default DateRange;

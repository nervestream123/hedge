import { Flex, TextField, Badge, Text, Select } from '@radix-ui/themes';
import { AngleIcon, CalendarIcon, RocketIcon } from '@radix-ui/react-icons';
import strategists from '../data/strategists';

function BacktestOptions() {
  return (
    <Flex width="100%" direction="column">

      <Flex width="100%" direction="row" className="mb-[5px]">
        <Text size="1" align="left" className="w-32 mr-[15px]!">Initial Capital</Text>
        <Text size="1" align="left" className="w-32 mr-[15px]!">Margin Ratio</Text>
        <Text size="1" align="left" className="w-32 mr-[15px]!">Start Date</Text>
        <Text size="1" align="left" className="w-32 mr-[15px]!">End Date</Text>
      </Flex>

      <Flex width="100%" direction="row" align="center" className="mb-[10px]">
        <TextField.Root placeholder="10,000.00" size="1" className="w-32 mr-[15px]">
          <TextField.Slot>
            <RocketIcon height="10" width="10" />
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder="0.75" size="1" className="w-32 mr-[15px]">
          <TextField.Slot>
            <AngleIcon height="10" width="10" />
          </TextField.Slot>
        </TextField.Root>
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
      </Flex>

      <Flex width="100%" direction="row" className="mb-[5px]">
        <Text size="1" align="left" className="w-32 mr-[15px]!">Strategist</Text>
      </Flex>

      <Flex width="100%" direction="row" align="center" className="mb-[15px]">
        <Select.Root size="1" className="w-32!" defaultValue={Object.values(strategists)[0]?.agentFunc || ''}>
          <Select.Trigger />
          <Select.Content>
            {Object.values(strategists).map((s) => (
              <Select.Item key={s.agentFunc} value={s.agentFunc}>
                <Flex direction="row" align="center" className="content-center items-center">
                  <div className={`w-2 h-2 ${s.color} rounded-full mr-[5px]`}></div>
                  <Text size="1">{s.displayName}</Text>
                </Flex>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        <Badge size="1" variant="surface" color="indigo" className="cursor-pointer ml-[15px]">Start Backtest</Badge>
      </Flex>

    </Flex>
  );
}

export default BacktestOptions;

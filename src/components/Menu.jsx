import { Flex, Tabs, Box, Text } from '@radix-ui/themes';
import Company from './Company';

function Menu() {
  return (
    <Flex width="100%" direction="column" className="">
      <Tabs.Root defaultValue="company">
        <Tabs.List size="1">
          <Tabs.Trigger value="company">Company</Tabs.Trigger>
          <Tabs.Trigger value="hedge">Hedge Fund</Tabs.Trigger>
          <Tabs.Trigger value="backtest">Backtest</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="company">
            <Company></Company>
          </Tabs.Content>

          <Tabs.Content value="hedge">
            <Text size="1">Hedge Fund</Text>
          </Tabs.Content>

          <Tabs.Content value="backtest">
            <Text size="1">Backtest</Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

    </Flex>
  );
}

export default Menu;

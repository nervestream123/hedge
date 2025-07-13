import { Flex, Tabs, Box, Text } from '@radix-ui/themes';

function Menu() {
  return (
    <Flex width="100%" direction="column" className="">
      <Tabs.Root defaultValue="account">
        <Tabs.List size="1">
          <Tabs.Trigger value="account">Hedge Fund</Tabs.Trigger>
          <Tabs.Trigger value="documents">Backtest</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="account">
            <Text size="1">Hedge Fund</Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="1">Backtest</Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>

    </Flex>
  );
}

export default Menu;

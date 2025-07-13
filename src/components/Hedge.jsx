import { Flex, Table, Text } from '@radix-ui/themes';
import strategists from "../data/strategists";
import Log from './Log';

function Hedge() {
  return (
    <Flex width="100%" direction="column" align="center" className="mb-[15px]">
      <Flex id="table" direction="column" width="100%" className="mb-[15px] h-[165px] overflow-y-scroll">
        <Table.Root size="1">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Strategist</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Description</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Style</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!" align="right"><Text size="1">Signal</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!" align="right"><Text size="1">Confidence</Text></Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Object.values(strategists).map((s, idx) => {
              // Convert camelCase to Title Case with spaces
              const styleTitle = s.investingStyle
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());
              return (
                <Table.Row key={idx}>
                  <Table.RowHeaderCell p="0" className="h-[25px]! flex content-center items-center">
                    <Flex direction="row" align="center" className="content-center items-center">
                      <div className={`w-2 h-2 ${s.color} rounded-full mr-[5px]`}></div>
                      <Text size="1">{s.displayName}</Text>
                    </Flex>
                  </Table.RowHeaderCell>
                  <Table.Cell p="0" className="h-[25px]!"><Text size="1">{s.description}</Text></Table.Cell>
                  <Table.Cell p="0" className="h-[25px]!"><Text size="1">{styleTitle}</Text></Table.Cell>
                  <Table.Cell p="0" className="h-[25px]!" align="right"><Text size="1">Bearish</Text></Table.Cell>
                  <Table.Cell p="0" className="h-[25px]!" align="right"><Text size="1">100%</Text></Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </Flex>

      <Log></Log>
    </Flex>
  );
}

export default Hedge;

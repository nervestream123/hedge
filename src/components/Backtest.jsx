import { Flex, Table, Text } from '@radix-ui/themes';
import Log from './Log';

function Backtest() {
  return (
    <Flex width="100%" direction="column" align="center" className="mb-[15px]">

      <Flex id="table" direction="column" width="100%" className="mb-[15px] h-[165px] overflow-y-scroll">
        <Table.Root size="1">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Date</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Action</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Quantity</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Price</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Cash</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Stock</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!"><Text size="1">Total Value</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!" align="right"><Text size="1">Bullish</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!" align="right"><Text size="1">Bearish</Text></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell p="0" className="h-[25px]!" align="right"><Text size="1">Neutral</Text></Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell p="0" className="h-[25px]!"><Text size="1">2025-05-25</Text></Table.RowHeaderCell>
              <Table.Cell p="0" className="h-[25px]!"><Text size="1">Hold</Text></Table.Cell>
              <Table.Cell p="0" className="h-[25px]!"><Text size="1">0</Text></Table.Cell>
              <Table.Cell p="0" className="h-[25px]!"><Text size="1">125.14</Text></Table.Cell>
              <Table.Cell p="0" className="h-[25px]!"><Text size="1">10,000</Text></Table.Cell>
              <Table.Cell p="0" className="h-[25px]!"><Text size="1">0</Text></Table.Cell>
              <Table.Cell p="0" className="h-[25px]!"><Text size="1">10,000</Text></Table.Cell>
              <Table.Cell p="0" className="h-[25px]!" align="right"><Text size="1">1</Text></Table.Cell>
              <Table.Cell p="0" className="h-[25px]!" align="right"><Text size="1">2</Text></Table.Cell>
              <Table.Cell p="0" className="h-[25px]!" align="right"><Text size="1">0</Text></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Flex>

      <Log></Log>
    </Flex>
  );
}

export default Backtest;

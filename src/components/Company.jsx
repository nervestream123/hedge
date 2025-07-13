import { Flex, Text } from '@radix-ui/themes';

function Company() {
  return (
    <Flex width="100%" direction="column">
      {/* Company */}
      <Flex className="mb-[10px]">
        <Text size="4" weight="bold">Apple Inc. (AAPL)</Text>
      </Flex>
      {/* Price */}
      <Flex direction="row" className="content-center items-center mb-[10px]">
        <Text size="5" weight="bold">214.91</Text>
        <Text size="2" weight="bold" color="green" className="pl-[5px] pt-[2px]">+1.72</Text>
        <Text size="2" weight="bold" color="green" className="pl-[5px] pt-[2px]">(+0.59%)</Text>
      </Flex>
      {/* Overview */}
      <Flex className="mb-[20px]">
        <Text as="p" align="left" size="1">
          Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV and Apple Watch.
        </Text>
      </Flex>
      {/* Info */}
      <Flex direction="row" className="mb-[20px]">
        {/* Left */}
        <Flex direction="column" className="flex-1 mr-[5px]">
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">Sector</Text><Text size="1" weight="bold">Technology</Text>
          </Flex>
        </Flex>
        {/* Right */}
        <Flex direction="column" className="flex-1 ml-[5px]">
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">Industry</Text><Text size="1" weight="bold">Consumer Electronics</Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Data */}
      <Flex direction="row" className="mb-[10px]">
        {/* Left */}
        <Flex direction="column" className="flex-1 mr-[5px]">
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">Previous Close</Text><Text size="1" weight="bold">212.41</Text>
          </Flex>
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">Open</Text><Text size="1" weight="bold">210.57</Text>
          </Flex>
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">Volume</Text><Text size="1" weight="bold">39,765,812</Text>
          </Flex>
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">Avg. Volume</Text><Text size="1" weight="bold">54,649,447</Text>
          </Flex>
        </Flex>
        {/* Right */}
        <Flex direction="column" className="flex-1 ml-[5px]">
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">Day's Range</Text><Text size="1" weight="bold">209.86 - 212.13</Text>
          </Flex>
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">52 Week Range</Text><Text size="1" weight="bold">169.21 - 260.10</Text>
          </Flex>
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">Market Cap</Text><Text size="1" weight="bold">3.154T</Text>
          </Flex>
          <Flex direction="row" justify="between" className="pb-[3px] mb-[3px] border-b-1 border-[#8c00ff9f] border-dashed">
            <Text size="1" weight="medium">EPS</Text><Text size="1" weight="bold">6.42</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Company;

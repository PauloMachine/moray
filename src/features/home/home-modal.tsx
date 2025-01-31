import { useEffect, useMemo } from "react";
import type { ChartData } from "chart.js";
import { Line } from "react-chartjs-2";
import { useModal } from "../../components/ui/modal/modal.context";
import { usePopulations } from "../../hooks/populations.hook";
import { Flex, LabelValue, Modal } from "../../components/ui";
import type { IHomeModal } from "./home.types";

const HomeModal = ({ neighborhood, setNeighborhood }: IHomeModal) => {
  const { closeModal, openModal } = useModal();
  const { data: populations } = usePopulations();

  const population = useMemo(() => {
    if (!neighborhood || !populations) return null;

    return populations.filter(
      (population) => population.id_geometria === neighborhood.id
    );
  }, [neighborhood, populations]);

  const data = useMemo<ChartData<"line">>(() => {
    if (!population) {
      return { labels: [], datasets: [] };
    }

    return {
      labels: population.map((pop) => pop.ano),
      datasets: [
        {
          data: population.map((pop) => pop.populacao),
          tension: 0.4,
          borderColor: "#4285f4",
          backgroundColor: "rgba(0, 0, 255, 0.2)",
        },
      ],
    };
  }, [population]);

  useEffect(() => {
    if (neighborhood && population?.length) {
      openModal();
    }
  }, [neighborhood, population, openModal]);

  const onClose = () => {
    setNeighborhood(null);
    closeModal();
  };

  return (
    <Modal title="Evolução populacional" onClose={onClose}>
      <Flex gap="50" justify="space-between">
        <Flex gap="5">
          <LabelValue label="Nome:" value={neighborhood?.name} />
          <LabelValue label="Setor:" value={neighborhood?.setor} />
          <LabelValue label="Zona:" value={neighborhood?.zona} />
        </Flex>
        <Line data={data} />
      </Flex>
    </Modal>
  );
};

export default HomeModal;

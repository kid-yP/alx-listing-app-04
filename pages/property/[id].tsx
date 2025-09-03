import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

interface Property {
  // Add the expected fields for a property, for example:
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  // Add other fields as needed
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get<Property>(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}
